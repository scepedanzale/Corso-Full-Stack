
@extends('templates.layout')

@section('titlePage', 'HomePage')


@section('content')
    @foreach($products as $p)
        <div class="row mb-3 bg-body-tertiary rounded-2 text-center">
            <div class="col">
                {{$p['id']}}
            </div>
            <div class="col">
                {{$p['name']}}
            </div>
            <div class="col">
                {{$p['type']}}
            </div>
            <div class="col">
                <a href="/products/{{$p['id']}}" class="btn btn-sm btn-outline-dark my-1">Info</a>
            </div>
        </div>
    @endforeach

    <a href="/products/create" class="btn btn-success my-1">Aggiungi Pokémon</a>
@endsection