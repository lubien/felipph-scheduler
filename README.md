# Scheduler

An assignment from [@felipph](https://github.com/felipph) to me.

## Objective

With NodeJS, run a `main` process that spams `N` child processes.

For each `child`ren separatedly, if the return value is one of `SHOULD_STOP`, let it die. Otherwise, spam a new `child`.

The `main` process ends when `N` `SHOULD STOP` messages are received.
