<?php

use Illuminate\Support\Facades\Route;

Route::get('/allUsers', function(){
    $users = [
        ["id" => "1",
        "name" => "paola",
        "surname" => "neri",
        "city" => "roma"
        ],
        ["id" => "2",
        "name" => "luigi",
        "surname" => "verdi",
        "city" => "milano"
        ],
        ["id" => "3",
        "name" => "francesca",
        "surname" => "gialli",
        "city" => "torino"
        ]
    ];
    return view('allUsers', ["users" => $users]);
});

Route::get('/createUser', function(){
    return view('createUser');
});

Route::get('/updateUser/{id}', function(){
    return view('updateUser');
});

Route::get('/deleteUser/{id}', function(){
    return view('deleteUser');
});

Route::get('/userDetail/{id}', function(){
    return view('userDetail');
});
