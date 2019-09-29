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



                <button type="button" class="abv-see-btn" data-toggle="modal" data-target="{{'#modalShowDetails'.$advice->id}}">
                    <i class="far fa-eye"></i>
                </button>



                <div class="modal fade" id="{{'modalShowDetails'.$advice->id}}" tabindex="-1" role="dialog" aria-labelledby="adviceDetails" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="details-header" id="adviceDetails">Lua <span>{{$advice->moon}}</span> em <span>{{$advice->sign}}</span></h5><br>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5>Dica</h5>
                            <p>{{$advice->advice}}</p>
                        </div>
                        <div class="modal-footer">

                            <a href="{{route('advices.edit', $advice->id)}}" role="button" class="btn btn-secondary">
                                
                                <i class="fas fa-pen"></i> Editar

                            </a>

                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>



                    <a href="{{route('advices.edit', $advice->id)}}" 
          class="abv-edit-btn abv-action-btn" 
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
