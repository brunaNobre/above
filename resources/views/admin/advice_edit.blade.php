@extends('layouts.dashboard')

@section('content')


<div class='col-sm-11'>
    <h2 class="sec-title"> Alterar Dica </h2>
</div>
<div class='col-sm-1 go-back-button'>
    <a href="{{route('advices.index')}}" class="above-admin-btn btn btn-primary" 
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
    
    <form method="post" action="{{route('advices.update', $advice->id)}}">
    {!! method_field('put') !!}
        {{ csrf_field() }}

        <div class="form-group">
            <label for="moon">Lua:</label>
            <input type="text" class="form-control" id="moon"
                   name="moon" 
                   value="{{$advice->moon}}"
                   required>
        </div>

           <div class="form-group">
            <label for="sign">Signo:</label>
            <input type="text" class="form-control" id="sign"
                   name="sign" 
                   value="{{$advice->sign}}"
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="advice">Dica:</label>
            <textarea rows="15" cols="30" class="form-control" id="advice"
                   name="advice" 
                   required>{{$advice->advice}}</textarea>
        </div>

     



        <button type="submit" class="above-admin-btn btn btn-primary">Enviar</button>        
    </form>    
</div>    


@endsection