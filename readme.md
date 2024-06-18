# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Sufgang](https://www.sufgang.com.br/).

## Funcionalidades Testadas

1. **Aceitar Cookies:**
   - Espera até que o botão "Aceitar Cookies" esteja disponível.
   - Clica no botão para aceitar os cookies.
   - Assert: Confirma se os cookies são aceitos corretamente.

2. **Login:**
   - Clica no link de login usando XPath.
   - Insere um email e senha vazios nos campos correspondentes.
   - Clica no botão de login.
   - Assert: Confirma se o login não é realizado corretamente devido a informações de login inválidas.

3. **Navegação:**
   - Clica nos links "shop" e "lookbook" usando XPath para navegar por diferentes seções do site.
   - Navega de volta para a página anterior.
   - Assert: Confirma se a navegação funciona corretamente entre diferentes páginas e ao voltar para a página anterior.

4. **Selecionar Item e Adicionar ao Carrinho:**
   - Clica no link de um item específico usando XPath.
   - Seleciona o tamanho do item clicando na opção disponível.
   - Clica no botão para adicionar o item ao carrinho.
   - Assert: Confirma se o item é adicionado corretamente ao carrinho de compras.

5. **Calcular Frete:**
   - Insere um CEP válido no campo de cálculo de frete.
   - Pressiona Enter para calcular o frete.
   - Assert: Confirma se o cálculo de frete é realizado corretamente.

6. **Acessar Rota Inexistente:**
   - Tenta acessar uma rota inexistente (`https://www.sufgang.com.br/naoexisto`).
   - Clica no link para voltar à página inicial.
   - Assert: Confirma se o retorno à página inicial após tentar acessar uma rota inexistente funciona corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/seu-usuario/.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
