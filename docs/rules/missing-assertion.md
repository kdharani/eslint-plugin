# Test should assert something (missing-assertion)

This rule aims to find the usage of browser.sleep in test code


## Rule Details

Test should include assertions. This rule ensures every test asserts an expected behavior 

Examples of **incorrect** code for this rule:

```js

    it('Delete vets test', async function () {
        let vetsCount = 0;
        await vetsPage.navigate();
        vetsCount = await vetsPage.getVetsCount();
        await vetsPage.deleteVet(data.vets);

    })

```

Examples of **correct** code for this rule:

```js

    it('Test Description', async function () {
        let vetsCount = 0;
        await vetsPage.navigate();
        vetsCount = await vetsPage.getVetsCount();
        await vetsPage.deleteVet(data.vets);

        expect(await vetsPage.getVetsCount(), 'Vet was not deleted').to.be.equal(vetsCount-1);
    })

```


## When Not To Use It

Don't use it in page object

## Further Reading

https://rules.sonarsource.com/java/tag/tests/RSPEC-2699
