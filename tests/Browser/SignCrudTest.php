<?php

namespace Tests\Browser;

use App\Sign;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class SignCrudTest extends DuskTestCase
{
  
    
    public function testPagePathExists()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/signs')
            ->assertPathIs('/admin/signs')
            
            ->clickLink('Administradora')
            ->clickLink('Sair');

                  
        });


    }


    public function testCreateSign()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/signs')
            ->clickLink('+')
            ->type('name', 'TestName')
            ->type('description', 'TestDescription')
            ->press('Enviar')
            ->assertPathIs('/admin/signs')
            ->assertSee('TestName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $signTest = Sign::latest()->first();
            $signTest->delete();
                  
        });


    }


    public function testReadSign()
    {
        $data = [
            'name' => 'TestReadName',
            'description' => 'TestReadDescription',

        ];

        $signTest = Sign::create($data);

        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/signs')
            ->assertSee('TestReadName')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $signTest = Sign::latest()->first();
            $signTest->delete();

                  
        });


    }

    public function testUpdateSign()
    {
        $data = [
            'name' => 'TestUpName',
            'description' => 'TestUpDescription',
        ];

        $signTest = Sign::create($data);

        $this->browse(function ($browser) use ($signTest){


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/signs/'.$signTest->id.'/edit') 
            ->assertValue('#name', 'TestUpName')
            ->type('name', 'UpdatedName')
            ->press('Enviar')
            ->assertSee('UpdatedName')


            ->clickLink('Administradora')
            ->clickLink('Sair');

            $signTest = Sign::latest()->first();
            $signTest->delete();

                  
        });


    }




}
