# Discourage the use of element(by.css(&#39;css-locator&#39;)) in protractor test. Instead define element in pageobject (no-explicit-element)

Don't use element(by.css('css-locator')) in protractor test file. Instead define the page elements in pageobject file


## Rule Details

This rule aims warn if element find commands are used explicitly

Examples of **incorrect** code for this rule:

```js

it('Test description', async function () { 
    
    ...
    await element.all(by.css('.table.table-striped tr td div')); 
    ...
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

Don't use it in non test classes

## Further Reading

https://johnfergusonsmart.com/page-objects-that-suck-less-tips-for-writing-more-maintainable-page-objects/
