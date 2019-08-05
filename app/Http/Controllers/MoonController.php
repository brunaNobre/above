<?php

namespace App\Http\Controllers;

use App\Moon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MoonController extends Controller
{



    public function __construct()
    {
        $this->middleware('auth:admin');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $moons = Moon::all();
        return view('admin.moons_list', compact('moons'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
       
        return view('admin.moon_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'phase' => 'required|unique:moons|min:2|max:60',
            'description' => 'required',
        ]);
        // obtém os dados do form
        $dados = $request->all();
        $inc = Moon::create($dados);
        if ($inc) {
            return redirect()->route('moons.index')
                ->with('status', $request->phase . ' Incluída!');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function show(Moon $moon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
        // posiciona no registro a ser alterado e obtém seus dados
        $moon = Moon::find($id);
        return view('admin.moon_edit', compact('moon'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'phase' => ['required'],
            'description' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $moon = Moon::find($id);
        // realiza a alteração
        $alt = $moon->update($dados);
        if ($alt) {
            return redirect()->route('moons.index')
                ->with('status', $request->phase . ' Alterada!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $moon = Moon::find($id);
        if ($moon->delete()) {
            return redirect()->route('moons.index')
                ->with('status', $moon->phase . ' Excluída!');
        }
    }
}
