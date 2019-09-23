<?php

namespace App\Http\Controllers;

use App\Feelling;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FeellingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');

    }

    public function index()
    {
        
        $feellings = Feelling::all();
        return view('admin.feellings_list', compact('feellings'));
    }

    public function create()
    {
        
       

        return view('admin.feelling_create');

    }



    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        

        // obtém os dados do form
        $dados = $request->all();
        $inc = Feelling::create($dados);
        if ($inc) {
            return redirect()->route('feellings.index')
                ->with('status', $request->name. ' Incluído!');
            }
    }


    public function edit($id)
    {
       
        // posiciona no registro a ser alterado e obtém seus dados
        $feelling = Feelling::find($id);
        return view('admin.feelling_edit', compact('feelling'));
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $feelling = Feelling::find($id);
        // realiza a alteração
        $alt = $feelling->update($dados);
        if ($alt) {
            return redirect()->route('feellings.index')
                ->with('status', $request->name . ' Alterado!');
        }
    }



    public function destroy($id)
    {
        $feelling = Feelling::find($id);
        if ($feelling->delete()) {
            return redirect()->route('feellings.index')
                ->with('status', $feelling->name . ' Excluído!');
        }
    }


}
