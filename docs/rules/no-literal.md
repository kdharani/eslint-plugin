# Disallow the literal in code (no-literal)

One might have several general variables that are shared to between different tests. In case one of them changes, we don't wanna go over all tests and update the value. Use 'params' object can be used exactly for that. Set user login and password for authentication


## Rule Details

Discourage the use of hard-coded values. Example: loginPage.login("dale", "Test123"). Enforce to use parameters/read data from external source

Examples of **incorrect** code for this rule:

```js

    it('Delete vets test', async function () {
        let vetsCount = 0;
        await vetsPage.navigate();
        vetsCount = await vetsPage.getVetsCount();
        await vetsPage.deleteVet('vet-name');

        expect(await vetsPage.getVetsCount(), 'Vet was not deleted').to.be.equal(vetsCount-1);
    })

```

Examples of **correct** code for this rule:

```js

    it('Delete vets test', async function () {
        let vetsCount = 0;
        await vetsPage.navigate();
        vetsCount = await vetsPage.getVetsCount();
        await vetsPage.deleteVet(data.vets);

        expect(await vetsPage.getVetsCount(), 'Vet was not deleted').to.be.equal(vetsCount-1);
    })

```

## When Not To Use It

You shall turn off the rule if the literal being used is an identifier / key 

## Further Reading


