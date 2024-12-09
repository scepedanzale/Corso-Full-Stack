<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller{

    public $products = [
        ['id' => 1,
        'name' => 'bulbasaur',
        'type' => 'erba'
        ],
        ['id' => 2,
        'name' => 'charmender',
        'type' => 'fuoco'
        ],
        ['id' => 3,
        'name' => 'squirtle',
        'type' => 'acqua'
        ],
        ['id' => 4,
        'name' => 'pikachu',
        'type' => 'elettro'
        ]
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('products', ['products'=>$this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('createProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
