## Symfony

### Override Maker bundle templates
```bash
curl -o maker/Generator.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Generator.php

# custom crud controller
curl --create-dirs -o maker/Generator.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Generator.php
curl --create-dirs -o maker/Resources/skeleton/crud/controller/Controller.tpl.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/maker/Resources/skeleton/crud/controller/Controller.tpl.php
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
composer require babdev/pagerfanta-bundle
curl --create-dirs -o templates/components/pager.html.twig https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/templates/components/pager.html.twig
```

### Entity Behaviors
```
curl --create-dirs -o src/Entity/Behaviours/UpdatedAtTrait.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/src/Entity/Behaviours/UpdatedAtTrait.php
curl --create-dirs -o src/Entity/Behaviours/CreatedAtTrait.php https://raw.githubusercontent.com/ivanstan/woodpecker/main/symfony/src/Entity/Behaviours/CreatedAtTrait.php
```
