#!/bin/bash

echo "Cleaning old install..."
rm -rf laravel-swoole
rm -rf laravel-vanilla
rm -rf adonis-vanilla

echo "Getting PHP version..."
php -v

echo "Getting Node.js version..."
node -v

echo "Installing Laravel (vanilla)"
laravel new laravel-vanilla

echo "Configuring Laravel (vanilla)"
cp -f config/laravel/.env laravel-vanilla/.env
cp -f config/laravel/web.php laravel-vanilla/routes/web.php

echo "Installing Laravel (swoole)"
laravel new laravel-swoole

echo "Configuring Laravel (swoole)"
cp -f config/laravel/.env laravel-swoole/.env
cp -f config/laravel/web.php laravel-swoole/routes/web.php
cp -f config/laravel-swoole/config/app.php laravel-swoole/config/app.php
cd laravel-swoole
composer require swooletw/laravel-swoole
php artisan vendor:publish --tag=laravel-swoole
cd ..

echo "Installing Adonis (vanilla)"
adonis new adonis-vanilla

echo "Configuring Adonis (vanilla)"
cp -f config/adonis/.env adonis-vanilla/.env
cp -f config/adonis/routes.js adonis-vanilla/start/routes.js