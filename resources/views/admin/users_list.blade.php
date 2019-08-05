@extends('layouts.dashboard')

@section('content')

<div class='col-sm-8'>
    <h2 class="sec-title"> Usuários </h2>
</div>
<div class='col-sm-4'>
    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif
</div>

<div class="w3-container">

<table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white w3-ul w3-card-4">
    <thead>
      <tr>
        <th>Nome</th>
        <th>E-mail</th> 
      </tr>
    </thead>
    <tbody>
@foreach($users as $user)
<tr>
    <td>{{$user->name}}</td>
    <td>{{$user->email}}</td>
    
    <td>
       <form style="display: inline-block"
             method="post"
             action="{{route('users.destroy', $user->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button type="submit"
                     class="btn btn-danger"> Excluir </button>
       </form> 
    </td>
</tr>
@endforeach
  
    </tbody>
  </table>    
</div>



@endsection