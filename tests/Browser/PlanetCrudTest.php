<?php

namespace Tests\Browser;

use App\Planet;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class PlanetCrudTest extends DuskTestCase
{
  
    
    public function testPagePathExists()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/planets')
            ->assertPathIs('/admin/planets')
            
            ->clickLink('Administradora')
            ->clickLink('Sair');

                  
        });


    }


    public function testCreatePlanet()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/planets')
            ->clickLink('+')
            ->type('name', 'TestName')
            ->type('description', 'TestDescription')
            ->press('Enviar')
            ->assertPathIs('/admin/planets')
            ->assertSee('TestName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $planetTest = Planet::latest()->first();
            $planetTest->delete();
                  
        });


    }


    public function testReadPlanet()
    {
        $data = [
            'name' => 'TestReadName',
            'description' => 'TestReadDescription',

        ];

        $planetTest = Planet::create($data);

        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/planets')
            ->assertSee('TestReadName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $planetTest = Planet::latest()->first();
            $planetTest->delete();

                  
        });


    }

    public function testUpdatePlanet()
    {
        $data = [
            'name' => 'TestUpName',
            'description' => 'TestUpDescription',
        ];

        $planetTest = Planet::create($data);

        $this->browse(function ($browser) use ($planetTest){


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/planets/'.$planetTest->id.'/edit') 
            ->assertValue('#name', 'TestUpName')
            ->type('name', 'UpdatedName')
            ->press('Enviar')
            ->assertSee('UpdatedName')


            ->clickLink('Administradora')
            ->clickLink('Sair');

            $planetTest = Planet::latest()->first();
            $planetTest->delete();

                  
        });


    }




}
