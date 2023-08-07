<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://sendsay.ru/new/img/logo.svg" alt="Project logo"></a>
</p>

<h3 align="center">github-action-checks</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/sendsay-ru/github-action-checks/issues.svg)](https://github.com/sendsay-ru/github-action-checks/issues/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/sendsay-ru/github-action-checks/issues.svg)](https://github.com/sendsay-ru/github-action-checks/issues/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">A CLI-tool for generate github-actions workflow for pull-requests and master branch checks
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
- [🎈 Usage ](#-usage-)
- [✍️ Authors ](#️-authors-)

## 🧐 About <a name = "about"></a>

We have created a project to configure the same type of checks. This package allows you to quickly configure the necessary checks for your repository using github-actions. This is a CLI tool with very simple usage.

## 🏁 Getting Started <a name = "getting_started"></a>

Just run

```
npx github-actions-checks
```

The file `.github.checks.json` will appear in your repository. You can make the necessary changes in it and re-run the utility to make changes in workflow according to the config.

## 🎈 Usage <a name="usage"></a>

The main config - `.github.checks.json`<br>
config by default:
```
{
  "jobs": [
    {
      "key": "checks",
      "steps": [
        {
          "key": "eslint",
          "name": "Eslint",
          "command": "npm eslint"
        },
        {
          "key": "prettier",
          "name": "Prettier",
          "command": "npm pretify"
        }
      ]
    },
    {
      "key": "tests",
      "steps": [
        {
          "key": "unit",
          "name": "Unit",
          "command": "npm test"
        }
      ]
    }
  ],
  "node": 16,
  "installCommand": "npm install",
  "buildCommand": ""
}
```

`jobs` - asynchronous processes<br>
each process - is a virtual machine and has:<br>
`node` - node.js version<br>
`installCommand` - command to install dependencies<br>
`buildCommand` - the command to build the project


`steps` - array of checks in within a single process<br>
each step has a `key`, a `name` and a `command`<br>

in this example, 2 parallel processes will start:<br>
in the first, checks will run one after the other: eslint and prettier,<br>
in the other - unit tests

## ✍️ Authors <a name = "authors"></a>

- [@aleksnick](https://github.com/aleksnick) - Idea & Initial work
