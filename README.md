<h1 align="center">Angular Boilerplate with MEAN example</h1>

Angular Boilerplate with MEAN example

## Install:
in main directory
```sh
    $ npm install
```
in server/ directory
```sh
    $ npm install
```
in main directory
```sh
    $ bower install
```
build project to development version
```sh
    $ gulp b
```
build project to production version (uglify, slice console.logs and debuggers)
```sh
    $ gulp b --production
```
watch and run server
```sh
    $ gulp w
```
generate JSDoc doumentation, support jsx files
```sh
    $ gulp doc
```
scan jshint errors
```sh
    $ gulp lint
```
check JS errors, if all done it will be deploy to FTP
```sh
    $ gulp deploy
```

! important ! This documentation builder has BUG! You dont use -> arrow functions and inside string this symbol !

For change configuration gulp and add custom things, you need modify gulpfile.js, task folder, and config in task folder

## The MIT License (MIT)

Copyright (c) 2015 Aleksandrov Sergey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.