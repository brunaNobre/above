@extends('layouts.admin')

@section('content')


<div class='col-sm-11'>
@if ($acao == 1)
    <h2> Inclusão de Fases da Lua </h2>
@else
    <h2> Alteração de Fases </h2>
@endif
</div>
<div class='col-sm-1'>
    <a href="{{route('moons.index')}}" class="btn btn-primary" 
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
    
@if ($acao == 1)
    <form method="post" action="{{route('moons.store')}}">
@else
    <form method="post" action="{{route('moons.update', $reg->id)}}">
    {!! method_field('put') !!}
@endif
        {{ csrf_field() }}

        <div class="form-group">
            <label for="moon_phase">Nome do moona:</label>
            <input type="text" class="form-control" id="moon_phase"
                   name="moon_phase" 
                   value="{{$reg->moon_phase or old('moon_phase')}}"
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <input type="text" class="form-control" id="description"
                   name="description" 
                   value="{{$reg->description or old('description')}}"
                   required>
        </div>

     



        <button type="submit" class="btn btn-primary">Enviar</button>        
        <button type="reset" class="btn btn-warning">Limpar</button>        
    </form>    
</div>    


@endsection