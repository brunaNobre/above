<?php

namespace App\Http\Controllers;

use App\Planet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PlanetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        $planets = Planet::all();
        return view('admin.planets_list', compact('planets'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        if (!Auth::check()) {
            return redirect('/');
        }
        // 1: indica inclusão
        $acao = 1;
        return view('admin.planets_form', compact('acao'));

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
            'name' => 'required|unique:planets|min:2|max:60',
            'description' => 'required',
        ]);
        // obtém os dados do form
        $dados = $request->all();
        $inc = Planet::create($dados);
        if ($inc) {
            return redirect()->route('planets.index')
                ->with('status', $request->name. ' Incluído!');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Planet  $planet
     * @return \Illuminate\Http\Response
     */
    public function show(Planet $planet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Planet  $planet
     * @return \Illuminate\Http\Response
     */
    public function edit(Planet $planet)
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        // posiciona no registro a ser alterado e obtém seus dados
        $reg = Planet::find($planet);
        $acao = 2;
        return view('admin.planets_form', compact('reg', 'acao'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Planet  $planet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Planet $planet)
    {
        $this->validate($request, [
            'name' => ['required', 'unique:planets'],
            'description' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $reg = Planet::find($planet);
        // realiza a alteração
        $alt = $reg->update($dados);
        if ($alt) {
            return redirect()->route('planets.index')
                ->with('status', $request->name . ' Alterado!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Planet  $planet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Planet $planet)
    {
        $planet = Planet::find($planet);
        if ($planet->delete()) {
            return redirect()->route('planets.index')
                ->with('status', $planet->name . ' Excluído!');
        }
    }
}
