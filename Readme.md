# assert-pm

yarn and npm have started to diverge in feature set. For example yarn introduced [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), which do not work with npm (yet).

To avoid contributors accidentally using the "wrong" package manager and getting hard to debug errors, you can use `assert-pm` as a preinstall script. It'll cause the installation to fail and warn the user.

## Installation

```
yarn add --dev assert-pm
```

```
npm install --dev assert-pm
```

## Usage

If you are managing your packages with workspaces, you can add it to your parent package.json as preinstall script. Make sure to not add it to packages you do publish as this script will also be run upon installation by users.

```
 "scripts": {
    "preinstall": "assert-pm yarn --message"
  }
```

If anyone now runs

```
npm install
```

they will get an error:

```
 pmtest@1.0.0 preinstall
> assert-pm yarn

Please use yarn.
npm ERR! code ELIFECYCLE
```

### Options

```
assert-pm package-manager --message "We are managing our packages using yarn workspaces. Therefore this project requires yarn to install packages."
```
