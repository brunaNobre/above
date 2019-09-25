@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Usuários</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('users.create')}}" role="button" class="abv-admin-btn">+</a>

    </div>

</header>


<div class="abv-card">
    <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
        <tr>
            <th scope="row">{{$user->id}}</th>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>


                    <a href="#" 
          class="abv-moods-button" 
          role="button" alt="Moods" title="Moods"><i class="abv-moods-icon far fa-grin-beam"></i></a>
       <form style="display: inline-block"
             method="post"
             action="{{route('users.destroy', $user->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button title="Excluir" type="submit" class="abv-detele-button"> <i class="abv-delete-icon fas fa-trash-alt"></i> </button>
       </form> 

            </td>
        </tr>
        @endforeach   
    </tbody>
    </table>
        
</div>
@endsection
