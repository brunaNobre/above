@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Fases da Lua</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('moons.create')}}" role="button" class="abv-admin-btn">+</a>

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
        @foreach($moons as $moon)
        <tr>
            <th scope="row">{{$moon->id}}</th>
            <td>{{$moon->phase}}</td>
            <td>{{$moon->description}}</td>
            <td>


                    <a href="{{route('moons.edit', $moon->id)}}" 
          class="abv-edit-button" 
          role="button"><i class="abv-edit-icon fas fa-pen"></i></a>
       <form style="display: inline-block"
             method="post"
             action="{{route('moons.destroy', $moon->id)}}"
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
