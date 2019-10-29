@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Alterar Lua</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('moons.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>



@if (count($errors) > 0)

    <div class="alert alert-danger">

        <strong>Opa!</strong> Algo deu errado.

        <ul>

            @foreach ($errors->all() as $error)

                <li>{{ $error }}</li>

            @endforeach

        </ul>

    </div>

@endif




<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('moons.update', $moon->id)}}">
{!! method_field('put') !!}

        {{ csrf_field() }}


        <div class="form-group">
            <label for="phase">Fase da Lua:</label>
            <input type="text" class="form-control" id="phase"
                   name="phase"
                   value="{{$moon->phase}}" 
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea rows="10" cols="30" class="form-control" id="description"
                   name="description" 
                   required>{{$moon->description}}</textarea>
        </div>
        
     



        <button type="submit" class="abv-btn btn btn-primary">Enviar</button>        
    </form>

    <form class="image-upload" action="{{ route('admin.moon.image')}}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    
    <input type="hidden" name="id" value="{{$moon->id}}">

            <div class="row">
                <div class="col-md-6">
                    <input type="file" name="image" class="form-control">
                </div>
                <div class="col-md-6">
                    <button type="submit" class="abv-btn btn btn-primary">Incluir imagem</button>
                </div>
            </div>
        </form>  
        
</div>
@endsection
