# Tally.js
A getter/setter for keeping tallies through JavaScript

## Usage

### Initialize
Create a new tally:
`var tally = new Tally({factor:1, startFrom:0});`

Settings object is optional. By default, tally will start from zero and count by one.

`factor` overrides the counter. To count by twos, for example, use `{factor:2}`.

`startFrom` overrides starting point. To start at 50, use `{startFrom:50}`

### Call

Increase the tally by calling:
`tally.set([number]);`

`[number]` parameter is optional. By default, `tally.set()` will increment once. Including a numeric parameter will increment `[number]` times.

## Author
Matthew Smith — [niftinessafoot](http://www.niftinessafoot.com)

## History
October 18, 2015 : Initial commit.