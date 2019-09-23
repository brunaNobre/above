@extends('layouts.dashboard')

@section('content')

<div class='col-sm-8'>
    <h2 class="sec-title"> Sentimentos </h2>
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
      </tr>
    </thead>
    <tbody>
@foreach($feellings as $feelling)
<tr>
    <td>{{$feelling->name}}</td>
    
    <td>
       <a href="{{route('feellings.edit', $feelling->id)}}" 
          class="btn btn-warning" 
          role="button">Alterar</a> &nbsp;&nbsp;
       <form style="display: inline-block"
             method="post"
             action="{{route('feellings.destroy', $feelling->id)}}"
             onsubmit="return confirm('Confirma Exclusão?')">
             {{method_field('delete')}}
             {{csrf_field()}}
             <button type="submit"
                     class="btn btn-danger"> Excluir </button>
       </form> 
    </td>
</tr>
@endforeach
    <tr> <td><a href="{{route('feellings.create')}}" class="above-admin-btn btn btn-info"
                role="button">Novo</a></td></tr>
    </tbody>
  </table>    
</div>



@endsection