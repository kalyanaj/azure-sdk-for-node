_ = require('underscore');
child_process = require('child_process');
fs = require('fs');
os = require('os');
path = require('path');
request = require('request');
util = require('util');

module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('downloadNuGet', 'Download the NuGet.exe file if not already present', function() {
    grunt.log.writeln(this.name + ' task has executed, path = ' + grunt.config('downloadNuGet.path') +
      ' source = ' + grunt.config('downloadNuGet.src'));

    var config = {
      path: grunt.config('downloadNuGet.path') || 'hydra',
      src: grunt.config('downloadNuGet.src') || 'http://www.nuget.org/nuget.exe'
    };

    var done = this.async();

    if (!grunt.file.exists(config.path)) {
      grunt.file.mkdir(config.path);
    }

    var nugetExePath = path.join(config.path, 'nuget.exe');
    var nugetExeStream = fs.createWriteStream(nugetExePath);

    nugetExeStream.on('finish', done);

    request(config.src).pipe(nugetExeStream);
  });

  grunt.registerTask('restorePackages', 'Download any missing packages from the nuget repositories', function () {
    var nugetPath = grunt.config('downloadNuGet.path') || 'hydra';
    var nugetExe = path.join(nugetPath, 'nuget.exe');

    var restoreConfigFile = 'restore.config';

    var configVars = [
      ['PRIVATE_FEED_URL', 'restorePackages.privateFeedUrl'],
      ['PRIVATE_FEED_USER_NAME', 'restorePackages.privateFeedUserName'],
      ['PRIVATE_FEED_PASSWORD', 'restorePackages.privateFeedPassword']
    ];

    configVars = configVars.map(function (v) { return [v[0], v[1], process.env[v[0]] || grunt.config(v[1])]; });

    var unsetVars = configVars.filter(function (v) { return !(v[2]); });
    if (unsetVars.length !== 0) {
      grunt.fail.fatal('The following environment variables must be set: ' + unsetVars.map(function (v) { return v[0]; }), 1);
      return;
    }

    var privateFeedUrl = configVars[0][2];
    var privateFeedUserName = configVars[1][2];
    var privateFeedPassword = configVars[2][2];

    deleteFile(restoreConfigFile);

    var n = nuget(nugetExe, restoreConfigFile);

    var done = this.async();

    n.addSource('hydra', privateFeedUrl, function (err) {
      if (err) { done(false); deleteFile(restoreConfigFile); return; }

      n.updateSource('hydra', privateFeedUserName, privateFeedPassword, function (err) {
        if (err) { done(false); deleteFile(restoreConfigFile); return; }

        n.restorePackages('packages.config', 'hydra', function (err) {
          deleteFile(restoreConfigFile);
          if (err) {
            done(false);
          } else {
            done();
          }
        });
      });
    });
  });

  grunt.registerTask('findspecdlls', 'Find the specification dlls in packages and print them out', function () {
    var paths = grunt.file.expand("./hydra/*.Specification.*/tools/*.Specification.dll");
    console.log(paths);
  });

  function deleteFile(filename) {
    if (grunt.file.exists(filename)) {
      grunt.file.delete(filename);
    }
  }

  // helper function/object to make it easier to run nuget

  function nuget(nugetExePath, configFile) {
    var defaultArgs = [];
    var argsTail = ['-NonInteractive'];

    if(os.platform() !== 'win32') {
      defaultArgs.shift(nugetExe);
      defaultArgs.shift('--runtime=v4.0.30319');
      nugetExePath = 'mono';
    }

    if (configFile) {
      argsTail.push('-configFile', configFile);
    }

    function spawnOpts() {
      var args = _.toArray(arguments);
      return {
        cmd: nugetExePath,
        args: defaultArgs.concat(args).concat(argsTail)
      };
    }

    function addSource(sourceName, sourceUrl, callback) {
      var opts = spawnOpts('sources', 'add', '-name', sourceName, '-source', sourceUrl);
      grunt.util.spawn(opts, callback);
    }

    function updateSource(sourceName, userName, password, callback) {
      var opts = spawnOpts('sources', 'update', '-name', sourceName, '-username', userName, '-password', 'password');
      grunt.util.spawn(opts, callback);
    }

    function restorePackages(packageConfigFile, packagesDir, callback) {
      var opts = spawnOpts('restore', packageConfigFile, '-PackagesDirectory', packagesDir, '-NonInteractive');
      grunt.util.spawn(opts, callback);
    }

    return {
      addSource: addSource,
      updateSource: updateSource,
      restorePackages: restorePackages
    };
  }

  //
  // Run a CLR executable - run it directly if on Windows,
  // through mono if not
  //
  function runExe(exePath, args, callback) {

    var spawnOpts = {
      cmd: exePath,
      args: args
    };

    if (os.platform() !== 'win32') {
      spawnOpts.args.shift(exePath);
      spawnOpts.args.shift('--runtime=v4.0.30319');
      spawnOpts.cmd = 'mono';
    }

    grunt.util.spawn(spawnOpts, callback);
  }
};
