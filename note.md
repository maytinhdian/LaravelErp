# Webapp quản lý sản phẩm TMT Innovative Sollution Co.,ltd
## Phân tích database 
1. Table categories 
    - id =>int
    - name => varchar(200)
    - slug => varchar(200)
    - parent_id =>int
    - created_at => timestamp
    - updated_at => timestamp
## Dành cho người dùng 
## Dành cho quản trị 
## API 
## Create model 
- Link tham khảo https://laravel.com/docs/10.x/eloquent#generating-model-classes

- Lệnh commit cơ bản, đơn giản nhất là thực hiện với tham số -m để kèm dòng thông tin về commit

    + git commit -m "Ghi chú về commit"
        Lệnh trên tạo ra một commit với nội dung lấy từ vùng staging, một điểm trong lịch sử commit được tạo ra với thông tin là dòng thông tin nhập vào, sau này bạn có thể xem lại lịch sử này bằng lệnh git log

        Thực hiện commit với tham số -a
        Khi cho tham số -a thì nó tương đương thực hiện lệnh git add để đưa các file đang được giám sát có sự thay đổi vào staging rồi tự động chạy git commit

    + git commit -a -m "Ghi chú về commit"

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
