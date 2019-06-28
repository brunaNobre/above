@extends('layouts.admin')

@section('content')


<div class='col-sm-11'>
    <h2> Alterar Planeta </h2>
</div>
<div class='col-sm-1'>
    <a href="{{route('planets.index')}}" class="above-admin-btn btn btn-primary" 
       role="button">Voltar</a>
</div>

<div class='col-sm-12'>

@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif        
    
    <form method="post" action="{{route('planets.update', $planet->id)}}">
    {!! method_field('put') !!}
        {{ csrf_field() }}

        <div class="form-group">
            <label for="name">Nome do planeta:</label>
            <input type="text" class="form-control" id="name"
                   name="name" 
                   value="{{$planet->name or old('name')}}"
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <input type="text" class="form-control" id="description"
                   name="description" 
                   value="{{$planet->description or old('description')}}"
                   required>
        </div>

     



        <button type="submit" class="above-admin-btn btn btn-primary">Enviar</button>        
        <button type="reset" class="btn btn-warning">Limpar</button>        
    </form>    
</div>    


@endsection