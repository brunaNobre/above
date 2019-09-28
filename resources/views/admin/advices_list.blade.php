@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Dicas</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('advices.create')}}" role="button" class="abv-admin-btn">+</a>

    </div>

</header>


<div class="abv-card">
    <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Lua</th>
            <th scope="col">Signo</th>
            <th scope="col">Dica</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($advices as $advice)
        <tr>
            <th scope="row">{{$advice->id}}</th>
            <td>{{$advice->moon}}</td>
            <td>{{$advice->sign}}</td>

            @php
            $adviceString = $advice->advice;

            if(strlen($adviceString)>60) {
                $adviceString = substr($adviceString,0,60).' ...';                    
            }

            @endphp

            <td>{{$adviceString}}</td>

            <td>


                    <a href="{{route('advices.edit', $advice->id)}}" 
          class="abv-edit-button" 
          role="button"><i class="abv-edit-icon fas fa-pen"></i></a>
       <form style="display: inline-block"
             method="post"
             action="{{route('advices.destroy', $advice->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button type="submit" class="abv-detele-button"> <i class="abv-delete-icon fas fa-trash-alt"></i> </button>
       </form> 

            </td>
        </tr>
        @endforeach   
    </tbody>
    </table>
        
</div>
@endsection
