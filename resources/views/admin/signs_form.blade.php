@extends('layouts.admin')

@section('content')


<div class='col-sm-11'>
@if ($acao == 1)
    <h2> Incluir Signo </h2>
@else
    <h2> Alterar Signo </h2>
@endif
</div>
<div class='col-sm-1'>
    <a href="{{route('signs.index')}}" class="above-admin-btn btn btn-primary" 
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
    <form method="post" action="{{route('signs.store')}}">
@else
    <form method="post" action="{{route('signs.update', $reg->id)}}">
    {!! method_field('put') !!}
@endif
        {{ csrf_field() }}

        <div class="form-group">
            <label for="sign_name">Nome do Signo:</label>
            <input type="text" class="form-control" id="sign_name"
                   name="sign_name" 
                   value="{{$reg->sign_name or old('sign_name')}}"
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <input type="text" class="form-control" id="description"
                   name="description" 
                   value="{{$reg->description or old('description')}}"
                   required>
        </div>

     



        <button type="submit" class="above-admin-btn btn btn-primary">Enviar</button>        
        <button type="reset" class="btn btn-warning">Limpar</button>        
    </form>    
</div>    


@endsection