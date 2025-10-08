class PowerUp extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.depth = 1;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.x = -300;
    }

    // This is the key: a placeholder method for subclasses to override.
    applyEffect(player) {
        console.warn('applyEffect not implemented for this power-up type.');
    }
}

// SlayPowerUp subclass underneath superclass
class SlayPowerUp extends PowerUp {
    constructor(scene, x, y) {
            super(scene, x, y, 'powerup-slay');
        }
        
        applyEffect(player) {
            // We need the scene to access the enemies list
            const scene = this.scene;
            scene.enemies.forEach(monster => monster.destroy());
            scene.enemy_projectiles.forEach(bullet => bullet.destroy());
            scene.cameras.main.flash();
    }
}