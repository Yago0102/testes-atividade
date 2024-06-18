const {Builder, By, Key, until} = require("selenium-webdriver")

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://www.sufgang.com.br/")
        await driver.sleep(5000)

        await driver.wait(until.elementLocated(By.id("btn-aceito-cookies")))
        const acceptCookies = await driver.findElement(By.id("btn-aceito-cookies"))
        await acceptCookies.click()

        // Login 
        await driver.executeScript(`document.evaluate("//a[@href='/conta/login']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(2000)
        const emailInput = driver.findElement(By.id("id_email"))
        await emailInput.sendKeys(" ")
        const passwordInput = await driver.findElement(By.id("id_senha"))
        await passwordInput.sendKeys(" ")
        await driver.executeScript(`document.evaluate("//button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(5000)
            
        
        // Navegação
        await driver.executeScript(`document.evaluate("//a[contains(text(), 'shop')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(3000)
        await driver.executeScript(`document.evaluate("//a[contains(text(), 'lookbook')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(3000)
        await driver.navigate().back()
        await driver.sleep(3000)

        // Selecionando item e adicionando ao carrinho
        await driver.executeScript(`document.evaluate("//a[@href='https://www.sufgang.com.br/i39194qrl-tee-sufgang-basic-grey']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        const size = await driver.findElements(By.className("atributo-item"))
        await size[0].click()
        await driver.sleep(1000)
        await driver.executeScript(`document.evaluate("//a[@href='https://www.sufgang.com.br/carrinho/produto/269141132/adicionar']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)

        //Calculando frete
        const calcFrete = await driver.findElement(By.id("calcularFrete"))
        await calcFrete.sendKeys("69035801")
        await calcFrete.sendKeys(Key.ENTER)
        await driver.sleep(3000)
        await driver.executeScript(`document.evaluate("//a[@href='https://www.sufgang.com.br/']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)


        // Acessando rota inexistente

        await driver.get("https://www.sufgang.com.br/naoexisto")
        await driver.sleep(5000)
        await driver.executeScript(`document.evaluate("//a[@href='/']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)


    } catch (e) {
        console.log(e)
    }
}

openSite()