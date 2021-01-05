## Symfony

### Override Maker bundle templates
```bash
curl -o maker/Generator.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Generator.php

# custom crud controller
curl -o maker/Generator.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Generator.php
curl -o maker/Resources/skeleton/crud/controller/Controller.tpl.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Resources/skeleton/crud/controller/Controller.tpl.php
```
Add to `composer.json`
```
"autoload-dev": {
    "psr-4": {
        "Symfony\\Bundle\\MakerBundle\\": "maker"
    }
},
```

### Twig pager
```bash
curl -o templates/components/pager.html.twig https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/templates/components/pager.html.twig
```
