/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import gulp from 'gulp';
import changed from 'gulp-changed';
import through from 'through2';
import count from 'gulp-count';
import pathExists from 'path-exists';
import del from 'del';

async function isFileExistInSrc(stream, sourceFile, destPath) {
  const exist = await pathExists(destPath);
  if (!exist) {
    stream.push(sourceFile);
  }
}

function clearOldLibFilesTask() {
  const pathArr = [];
  return gulp.src(['lib/**/*.*'])
    .pipe(changed('src', {hasChanged: isFileExistInSrc}))
    .pipe(count('delete ## old lib files'))
    .pipe(through.obj((file, enc, cb) => {
      pathArr.push(file.path);
      cb(null, file);
    }, cb => {
      del(pathArr).then(() => cb()).catch(cb);
    }));
}

export default clearOldLibFilesTask;
