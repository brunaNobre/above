@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Signos</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('signs.create')}}" role="button" class="abv-admin-btn">+</a>

    </div>

</header>


<div class="abv-card">
    <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($signs as $sign)
        <tr>
            <th scope="row">{{$sign->id}}</th>
            <td>{{$sign->name}}</td>

            @php
            $adviceString = $sign->description;

            if(strlen($adviceString)>60) {
                $adviceString = substr($adviceString,0,60).' ...';                    
            }

            @endphp

            <td>{{$adviceString}}</td>
            <td>

                    <a href="#" class="abv-see-btn abv-action-btn" role="button"><i class="far fa-eye"></i></a>


                    <a href="{{route('signs.edit', $sign->id)}}" 
          class="abv-action-btn abv-edit-btn" 
          role="button"><i class="abv-edit-icon fas fa-pen"></i></a>

       <form style="display: inline-block"
             method="post"
             action="{{route('signs.destroy', $sign->id)}}"
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
