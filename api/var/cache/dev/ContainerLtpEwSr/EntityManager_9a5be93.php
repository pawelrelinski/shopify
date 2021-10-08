<?php

namespace ContainerLtpEwSr;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHoldere0d57 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer2eba6 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties73746 = [
        
    ];

    public function getConnection()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getConnection', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getMetadataFactory', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getExpressionBuilder', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'beginTransaction', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getCache', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getCache();
    }

    public function transactional($func)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'transactional', array('func' => $func), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'wrapInTransaction', array('func' => $func), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'commit', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->commit();
    }

    public function rollback()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'rollback', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getClassMetadata', array('className' => $className), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'createQuery', array('dql' => $dql), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'createNamedQuery', array('name' => $name), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'createQueryBuilder', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'flush', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'clear', array('entityName' => $entityName), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->clear($entityName);
    }

    public function close()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'close', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->close();
    }

    public function persist($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'persist', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'remove', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'refresh', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'detach', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'merge', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getRepository', array('entityName' => $entityName), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'contains', array('entity' => $entity), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getEventManager', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getConfiguration', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'isOpen', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getUnitOfWork', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getProxyFactory', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'initializeObject', array('obj' => $obj), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'getFilters', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'isFiltersStateClean', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'hasFilters', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return $this->valueHoldere0d57->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer2eba6 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHoldere0d57) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHoldere0d57 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHoldere0d57->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__get', ['name' => $name], $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        if (isset(self::$publicProperties73746[$name])) {
            return $this->valueHoldere0d57->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldere0d57;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldere0d57;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldere0d57;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldere0d57;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__isset', array('name' => $name), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldere0d57;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHoldere0d57;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__unset', array('name' => $name), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldere0d57;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHoldere0d57;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__clone', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        $this->valueHoldere0d57 = clone $this->valueHoldere0d57;
    }

    public function __sleep()
    {
        $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, '__sleep', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;

        return array('valueHoldere0d57');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer2eba6 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer2eba6;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer2eba6 && ($this->initializer2eba6->__invoke($valueHoldere0d57, $this, 'initializeProxy', array(), $this->initializer2eba6) || 1) && $this->valueHoldere0d57 = $valueHoldere0d57;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHoldere0d57;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHoldere0d57;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
