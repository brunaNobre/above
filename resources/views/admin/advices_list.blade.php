@extends('layouts.dashboard')

@section('content')

<div class='col-sm-8'>
    <h2 class="sec-title"> Dicas </h2>
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
        <th>Lua</th>
        <th>Signo</th>
        <th>Dica</th> 
      </tr>
    </thead>
    <tbody>
@foreach($advices as $advice)
<tr>
    <td>{{$advice->moon}}</td>
    <td>{{$advice->sign}}</td>
    <td>{{$advice->advice}}</td>
    
    <td>
       <a href="{{route('advices.edit', $advice->id)}}" 
          class="btn btn-warning" 
          role="button">Alterar</a> &nbsp;&nbsp;
       <form style="display: inline-block"
             method="post"
             action="{{route('advices.destroy', $advice->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button type="submit"
                     class="btn btn-danger"> Excluir </button>
       </form> 
    </td>
</tr>
@endforeach
    <tr> <td><a href="{{route('advices.create')}}" class="above-admin-btn btn btn-info"
                role="button">Novo</a></td></tr>
    </tbody>
  </table>    
</div>



@endsection