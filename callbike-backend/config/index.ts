const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_-8hfoPmol2ayuSVvefZ",
    host: "pg-cdtkpm-cdtkpmnc.a.aivencloud.com",
    port: 18615,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUWsRzFSI43WF8jBFJFggQp0XRiH8wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjFmOTM0NjUtNGIzYS00NmU5LTk2NTAtZTA1MDg5ZDll
OTdiIFByb2plY3QgQ0EwHhcNMjQwMzI4MDM1NzI2WhcNMzQwMzI2MDM1NzI2WjA6
MTgwNgYDVQQDDC9iMWY5MzQ2NS00YjNhLTQ2ZTktOTY1MC1lMDUwODlkOWU5N2Ig
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALNCqB/F
HzhizCSvaYQwtZIDzAUkYfw6G7cwH5VcO91eDj4gaHHuwLysnv4T7mQR3n3mOVCa
eQ01rZto8qbxMiFEJQ9TlzxWvzSzOJ5AUkwl4XAfAt8zHA1zPxORRLPvlQevJQda
Ki+3pFQYZHxxjiQP0pL4Mly7HKomTevWmviQzh+NNmisSlabMH3zDPy3thTh4zME
+e4pAOt42OUYWryigufqTEPioruc125zQ53kJh0F15ksd9+U4kxlD8HP2zAq9Kg6
CT82w0fHidIoQz47bx2a4VB35iqHSxb4rlSKoh+GDjwFJ8eE8UEdiZMuanhLBcCz
xDGPsulO3OoHKluCN7rU2AoGf5oYjkh20Io1hy0qIxR3pv4JuYo9d0R56QFH/ibx
OXfV8vXojjX61PI+NCITm8YEhxF9zcZ04JDkr+pUg2vKD85br0saSisyMUH5flNC
sb5yYlCowjdDYBuigVb0MymUb3PHfbefeQqNWT3gA18xbo3AjBPwvJ+tawIDAQAB
oz8wPTAdBgNVHQ4EFgQUN/AhOOKIsJk5r0Za3udLcNTSokcwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACP5gw6Hq2rh7lSY
w1qlc3BZbcKTX3um9l0wd21+RPKn3y3mGUwhxvaMgtqpuFBh9JxxYcHTeOZDAFPj
GGsEdu00XkZ7woTwWWMB4RP7Npa5yN35snvCO+mmBDhRHXF+lnRAI8pe5+kPjftv
+yQCDNCc456GSjTzul1+SDl2KDso1XZtNiW23AKrdojnEUCULWD53qHA87TIifn7
zrp8a2VEiajbD+9/yu5GUqgVCWVpEhGnnwtDlylXADtfd2Hj32LcIvRUPgVSu4Xc
qS1t8P77bY3iOLhZqg56KM6TWrT/vBdTr3VEKgGe1iqVUhvcJs3e+xC+LycfM7WL
1iY8FTW1tlkOu/tFl6gugaI5cLYDTq1GqXbjgyV/ZF8Iqt1ENeO0+Q8M2XVgJ8Ak
3yd4vxHORD12qkTDx61q9eQAJc+BE/evHKBvC1KwUxenaK5Yrw5IxRopJ+oFgD1z
4Ma0u2/52chz1OhAo/D4qPZeEiiVl04OR1FeJl7Dl4BXVYOlFw==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});