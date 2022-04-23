## [2.2.0](https://github.com/rvagg/ripemd160/compare/v2.1.1...v2.2.0) (2022-04-23)


### Features

* types ([#12](https://github.com/rvagg/ripemd160/issues/12)) ([e7d2ef0](https://github.com/rvagg/ripemd160/commit/e7d2ef00a5f17bb579063b361f236de92d624e37))


### Trivial Changes

* **no-release:** bump actions/checkout from 2.4.0 to 3.0.2 ([#11](https://github.com/rvagg/ripemd160/issues/11)) ([cc8235d](https://github.com/rvagg/ripemd160/commit/cc8235da75aee3df7c2adcd310bb8e0c57a0086c))
* **no-release:** bump actions/setup-node from 2.5.1 to 3.1.1 ([#8](https://github.com/rvagg/ripemd160/issues/8)) ([01260c2](https://github.com/rvagg/ripemd160/commit/01260c2af54ab0e929bb63cc8932ff44efa8fed1))

### [2.1.1](https://github.com/rvagg/ripemd160/compare/v2.1.0...v2.1.1) (2022-02-15)


### Trivial Changes

* switch to mocha, use polendina for browser tests ([6029a3d](https://github.com/rvagg/ripemd160/commit/6029a3d3c53ebcd2b90dce50e2e45024a46d2422))

## [2.1.0](https://github.com/rvagg/ripemd160/compare/v2.0.2...v2.1.0) (2022-02-15)


### Features

* 0.0.0 - remove Buffer & dependencies ([0ccc3a4](https://github.com/rvagg/ripemd160/commit/0ccc3a419f83a647c0adb050a9ba4f6c375fd08e))


### Bug Fixes

* **no-release:** exec tests with `tape` ([6066daf](https://github.com/rvagg/ripemd160/commit/6066daf99dd9dacc2943f0a6068fc4e29634ad3b))
* **src:** fix package.json for release and description ([1ea5c5e](https://github.com/rvagg/ripemd160/commit/1ea5c5ec3015222af73f150a321c4cc5010cdf2e))


### Trivial Changes

* **no-release:** add auto-release ([69d513d](https://github.com/rvagg/ripemd160/commit/69d513d95dddfdb103c0828a810db14a392d3136))
* **no-release:** bump actions/checkout from 2.3.4 to 2.4.0 ([#1](https://github.com/rvagg/ripemd160/issues/1)) ([58109e3](https://github.com/rvagg/ripemd160/commit/58109e349abeea79f4791679e5dc030362459347))
* **no-release:** bump actions/setup-node from 2.4.0 to 2.5.1 ([#2](https://github.com/rvagg/ripemd160/issues/2)) ([05d10d9](https://github.com/rvagg/ripemd160/commit/05d10d9e55332db6c397c189e4c3d6d6efc5ecae))

2.0.1 / 2016-06-22
------------------
- added LICENSE file.

2.0.0 / 2016-04-11
------------------
- rewritten, license change BSD-3 to MIT. [#13][#13]
- stream support [#13][#13]

1.0.1 / 2015-05-05
------------------
- standard formatting

1.0.0 / 2015-01-14
------------------
- updated dev deps
- added more test fixtures
- updated readme with usage, testing, etc
- moved from https://github.com/cryptocoinjs/ripemd160 to https://github.com/crypto-browserify/ripemd160

0.2.1 / 2014-12-31
------------------
- made license clear in `package.json`
- deleted `Makefile`, moved targets to `package.json`
- removed `terst` for `assert`

0.2.0 / 2014-03-09
------------------
* removed bower.json and component.json
* changed 4 spacing to 2
* returns `Buffer` type now, input must be Array, Uint8Array, Buffer, or string
* remove deps: `convert-hex` and `convert-string`

0.1.0 / 2013-11-20
------------------
* changed package name
* removed AMD support

0.0.2 / 2013-11-06
------------------
* fixed component.json file

0.0.1 / 2013-11-03
------------------
* initial release

<!--- add streams support, unroll loops [enhancement] -->
[#13]: https://github.com/crypto-browserify/ripemd160/pull/13
<!--- Update all dependencies 🌴 [greenkeeper] -->
[#12]: https://github.com/crypto-browserify/ripemd160/pull/12
<!--- little optimizations [enhancement] -->
[#11]: https://github.com/crypto-browserify/ripemd160/pull/11
<!--- Added LICENSE file to repo -->
[#10]: https://github.com/crypto-browserify/ripemd160/pull/10
<!--- Add LICENCE file -->
[#9]: https://github.com/crypto-browserify/ripemd160/pull/9
<!--- Support streaming [enhancement] -->
[#8]: https://github.com/crypto-browserify/ripemd160/issues/8
<!--- Unroll loops [enhancement] -->
[#7]: https://github.com/crypto-browserify/ripemd160/pull/7
<!--- Use SPDX-standard license naming -->
[#6]: https://github.com/crypto-browserify/ripemd160/pull/6
<!--- License -->
[#5]: https://github.com/crypto-browserify/ripemd160/issues/5
<!--- Add BSD license to package.json -->
[#4]: https://github.com/crypto-browserify/ripemd160/pull/4
<!--- Indicate byte array inputs are supported too -->
[#3]: https://github.com/crypto-browserify/ripemd160/pull/3
<!--- Node-specific implementation -->
[#2]: https://github.com/crypto-browserify/ripemd160/pull/2
<!--- Incorrect name of convert-string dependency in bower.json -->
[#1]: https://github.com/crypto-browserify/ripemd160/pull/1
