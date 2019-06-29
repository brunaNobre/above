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

        return view('admin.planet_create');

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
            'name' => 'string',
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
    public function edit($id)
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        // posiciona no registro a ser alterado e obtém seus dados
        $planet = Planet::find($id);
        return view('admin.planet_edit', compact('planet'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Planet  $planet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required'],
            'description' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $planet = Planet::find($id);
        // realiza a alteração
        $alt = $planet->update($dados);
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
    public function destroy($id)
    {
        $planet = Planet::find($id);
        if ($planet->delete()) {
            return redirect()->route('planets.index')
                ->with('status', $planet->name . ' Excluído!');
        }
    }
}
