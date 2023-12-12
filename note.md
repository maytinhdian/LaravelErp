# Webapp quản lý sản phẩm TMT Innovative Sollution Co.,ltd

## Install laravel modules
- To install via Composer, run: composer require nwidart/laravel-modules

- Optionally, publish the package's configuration file by running: php artisan vendor:publish --provider="Nwidart\Modules\LaravelModulesServiceProvider"

- Autoloading { "autoload": { "psr-4": { "App\": "app/", "Database\Factories\": "database/factories/", "Database\Seeders\": "database/seeders/", "Modules\": "Modules/" } } }

    Tip: don't forget to run composer dump-autoload afterwards.

- Link tham khảo tài liệu https://laravelmodules.com/docs/v10/introduction

## Install Laravel UI
- Command to install the LARAVEL ui package in the laravel app composer require laravel/ui
- Setup React Auth Scaffolding php artisan ui react --auth
- Install Npm Packages npm install 
    + Error: npm ERR! Could not resolve dependency: npm ERR! peer vite@"^3.0.0" from @vitejs/plugin-react@2.2.0 
    + Solved: npm config     set legacy-peer-deps true / Run npm install again npm run dev
- Run php artisan Migrate php artisan migrate
