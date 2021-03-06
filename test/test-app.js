/* global describe, beforeEach, it */

const path = require('path');
const fse = require('fs-extra');
// const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator web3j', () => {
    describe('Test with Maven and AngularX', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .on('end', done);
        });

        it('Assert pom.xml contains the dependency', () => {
            /*
            // TODO check if we can test modifications on JHispter generated files
            assert.fileContent(
                'pom.xml',
                '        <dependency>\n'
                + '            <groupId>org.web3j</groupId>\n'
                + '            <artifactId>core</artifactId>\n'
                + '            <version>4.5.5</version>\n'
                + '        </dependency>'
            );
             */
        });
    });

    describe('Test with Gradle and AngularX', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/gradle-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .on('end', done);
        });

        it('Assert build.gradle contains the dependency', () => {
            /*
            // TODO check if we can test modifications on JHispter generated files
            assert.fileContent(
                'build.gradle', 'implementation "org.web3j:core:4.5.5"'
            );
            */
        });
    });
});
