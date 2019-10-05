<?php

namespace Tests\Browser;

use App\Advice;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class AdviceCreateTest extends DuskTestCase
{
  
    
    public function testPagePathExists()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/advices')
            ->assertPathIs('/admin/advices')
            
            ->clickLink('Administradora')
            ->clickLink('Sair');

                  
        });


    }


    public function testCreateAnAdvice()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/advices')
            ->clickLink('+')
            ->type('moon', 'TestMoon')
            ->type('sign', 'TestSign')
            ->type('advice', 'TestAdvice')
            ->press('Enviar')
            ->assertPathIs('/admin/advices')
            ->assertSee('TestMoon')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $adviceTest = Advice::latest()->first();
            $adviceTest->delete();
                  
        });


    }


    public function testReadAnAdvice()
    {
        $data = [
            'moon' => 'TestReadMoon',
            'sign' => 'TestReadSign',
            'advice' => 'TestReadAdvice',
        ];

        $adviceTest = Advice::create($data);

        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/advices')
            ->assertSee('TestReadMoon')

            ->clickLink('Administradora')
            ->clickLink('Sair');

            $adviceTest = Advice::latest()->first();
            $adviceTest->delete();

                  
        });


    }

    public function testUpdateAnAdvice()
    {
        $data = [
            'moon' => 'TestUpMoon',
            'sign' => 'TestUpSign',
            'advice' => 'TestUpAdvice',
        ];

        $adviceTest = Advice::create($data);

        $this->browse(function ($browser) use ($adviceTest){


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')

            ->visit('/admin/advices/'.$adviceTest->id.'/edit') 
            ->assertValue('#moon', 'TestUpMoon')
            ->type('moon', 'UpdatedMoon')
            ->press('Enviar')
            ->assertSee('UpdatedMoon')


            ->clickLink('Administradora')
            ->clickLink('Sair');

            $adviceTest = Advice::latest()->first();
            $adviceTest->delete();

                  
        });


    }




}
