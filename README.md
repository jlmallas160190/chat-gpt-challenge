# About the project

Chat Gpt Challenge allows users to ask chatgpt about any topic and it is responsible for answering.



# Node installation

Install nvm:

- `https://github.com/nvm-sh/nvm`


# Atomic design

The following is the suggested structure to successfully build the react project in src:

```
src/                        # source project
├── components/
    ├── atoms                   # common components
    ├── molecules               # join atoms
    ├── organisms               # section of a template
    ├── templates               # structure of a page
├── layouts                 # backoffice layouts
├── pages                   # backoffice pages
├── routes
├── constants
├── hooks                   # react functions
├── contexts                # react contexts
├── schemas                 # yup validation form
├── services                # functions to call endpoints
├── i18n                    # internationalization using react-intl
└── ...
```

## Project Setup

In the following steps we will cover some basic stuff to setup a development environment for chat-gpt-challenge.

### Building the Project for Development Environment

1. Clone the repository using the following command:

```
$ git clone https://github.com/jlmallas160190/chat-gpt-challenge.git
```

2. Positioned in the root folder execute:

3. Run the follow command to use the node version for the project.

```
nvm use
```

4. Install dependencies

```
yarn install
```

5. Install husky

```
npx husky-init && yarn
```

6. Create .env file from .env.example
7. Run project

```
yarn dev
```
