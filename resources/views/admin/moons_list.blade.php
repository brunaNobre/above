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

            @php
            $descriptionString = $moon->description;

            if(strlen($descriptionString)>60) {
                $descriptionString = substr($descriptionString,0,60).' ...';                    
            }

            @endphp

            <td>{{$descriptionString}}</td>
            <td>




                <button type="button" class="abv-see-btn" data-toggle="modal" data-target="#modalShowDetails">
                    <i class="far fa-eye"></i>
                </button>



                <div class="modal fade" id="modalShowDetails" tabindex="-1" role="dialog" aria-labelledby="moonDetails" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="details-header" id="moonDetails">Lua <span>{{$moon->phase}}</span></h5><br>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5>Descrição</h5>
                            <p>{{$moon->description}}</p>
                        </div>
                        <div class="modal-footer">

                            <a href="{{route('moons.edit', $moon->id)}}" role="button" class="btn btn-secondary">
                                
                                <i class="fas fa-pen"></i> Editar

                            </a>

                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>





                <a href="{{route('moons.edit', $moon->id)}}" 
          class="abv-action-btn abv-edit-btn" 
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
