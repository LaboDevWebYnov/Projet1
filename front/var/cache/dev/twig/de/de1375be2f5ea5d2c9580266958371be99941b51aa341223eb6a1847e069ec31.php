<?php

/* HelloBundle:Default:index.html.twig */
class __TwigTemplate_4732dea0a9aa653a64d9d574b6d4d2c13b5ffd69470a209e7b1797f42097922c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_9849c2c34bff04afbac952d509ecb413cfb417af69c5cb13b2b0c53ed55ce9b6 = $this->env->getExtension("native_profiler");
        $__internal_9849c2c34bff04afbac952d509ecb413cfb417af69c5cb13b2b0c53ed55ce9b6->enter($__internal_9849c2c34bff04afbac952d509ecb413cfb417af69c5cb13b2b0c53ed55ce9b6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "HelloBundle:Default:index.html.twig"));

        // line 1
        echo "Hello ";
        echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : $this->getContext($context, "name")), "html", null, true);
        echo "!";
        
        $__internal_9849c2c34bff04afbac952d509ecb413cfb417af69c5cb13b2b0c53ed55ce9b6->leave($__internal_9849c2c34bff04afbac952d509ecb413cfb417af69c5cb13b2b0c53ed55ce9b6_prof);

    }

    public function getTemplateName()
    {
        return "HelloBundle:Default:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 1,);
    }
}
/* Hello {{ name }}!*/
