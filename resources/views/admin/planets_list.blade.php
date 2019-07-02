@extends('layouts.admin')

@section('content')

<div class='col-sm-8'>
    <h2 class="sec-title"> Planetas </h2>
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
        <th>Descriçao</th> 
      </tr>
    </thead>
    <tbody>
@foreach($planets as $planet)
<tr>
    <td>{{$planet->name}}</td>
    <td>{{$planet->description}}</td>
    
    <td>
       <a href="{{route('planets.edit', $planet->id)}}" 
          class="btn btn-warning" 
          role="button">Alterar</a> &nbsp;&nbsp;
       <form style="display: inline-block"
             method="post"
             action="{{route('planets.destroy', $planet->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button type="submit"
                     class="btn btn-danger"> Excluir </button>
       </form> 
    </td>
</tr>
@endforeach
    <tr> <td><a href="{{route('planets.create')}}" class="above-admin-btn btn btn-info"
                role="button">Novo</a></td></tr>
    </tbody>
  </table>    
</div>



@endsection