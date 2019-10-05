<?php

namespace Tests\Browser;

use App\Feelling;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class FeellingCrudTest extends DuskTestCase
{
  
    
    public function testPagePathExists()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/feellings')
            ->assertPathIs('/admin/feellings')
            
            ->clickLink('Administradora')
            ->clickLink('Sair');

                  
        });


    }


    public function testCreateAFeelling()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/feellings')
            ->clickLink('+')
            ->type('name', 'TestName')
            ->press('Enviar')
            ->assertPathIs('/admin/feellings')
            ->assertSee('TestName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $feellingTest = Feelling::latest()->first();
            $feellingTest->delete();
                  
        });


    }


    public function testReadAFeeling()
    {
        $data = [
            'name' => 'TestReadName',
        ];

        $feellingTest = Feelling::create($data);

        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/feellings')
            ->assertSee('TestReadName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $feellingTest = Feelling::latest()->first();
            $feellingTest->delete();

                  
        });


    }

    public function testUpdateAFeelling()
    {
        $data = [
            'name' => 'TestUpName',
        ];

        $feellingTest = Feelling::create($data);

        $this->browse(function ($browser) use ($feellingTest){


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/feellings/'.$feellingTest->id.'/edit') 
            ->assertValue('#name', 'TestUpName')
            ->type('name', 'UpdatedName')
            ->press('Enviar')
            ->assertSee('UpdatedName')


            ->clickLink('Administradora')
            ->clickLink('Sair');

            $feellingTest = Feelling::latest()->first();
            $feellingTest->delete();

                  
        });


    }




}
