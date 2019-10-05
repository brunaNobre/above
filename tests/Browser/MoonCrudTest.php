<?php

namespace Tests\Browser;

use App\Moon;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class MoonCrudTest extends DuskTestCase
{
  
    
    public function testPagePathExists()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/moons')
            ->assertPathIs('/admin/moons')
            
            ->clickLink('Administradora')
            ->clickLink('Sair');

                  
        });


    }


    public function testCreateMoon()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/moons')
            ->clickLink('+')
            ->type('phase', 'TestPhase')
            ->type('description', 'TestDescription')
            ->press('Enviar')
            ->assertPathIs('/admin/moons')
            ->assertSee('TestPhase')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $moonTest = Moon::latest()->first();
            $moonTest->delete();
                  
        });


    }


    public function testReadMoon()
    {
        $data = [
            'phase' => 'TestReadPhase',
            'description' => 'TestReadDescription',

        ];

        $moonTest = Moon::create($data);

        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/moons')
            ->assertSee('TestReadPhase')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $moonTest = Moon::latest()->first();
            $moonTest->delete();

                  
        });


    }

    public function testUpdateMoon()
    {
        $data = [
            'phase' => 'TestUpPhase',
            'description' => 'TestUpDescription',
        ];

        $moonTest = Moon::create($data);

        $this->browse(function ($browser) use ($moonTest){


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/moons/'.$moonTest->id.'/edit') 
            ->assertValue('#phase', 'TestUpPhase')
            ->type('phase', 'UpdatedPhase')
            ->press('Enviar')
            ->assertSee('UpdatedPhase')


            ->clickLink('Administradora')
            ->clickLink('Sair');

            $moonTest = Moon::latest()->first();
            $moonTest->delete();

                  
        });


    }




}
