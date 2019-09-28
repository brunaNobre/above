@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Alterar Dica</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('advices.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>


<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('advices.update', $advice->id)}}">
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
            <textarea rows="9" cols="30" class="form-control" id="advice"
                   name="advice" 
                   required>{{$advice->advice}}</textarea>
        </div>

        
     



        <button type="submit" class="abv-btn btn btn-primary">Enviar</button>        
    </form>  
        
</div>
@endsection
